import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken155 } from "./fragment155";
import type { FragmentToken156 } from "./fragment156";

export const FRAGMENT_157 = gql(`
  fragment Fragment157 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult157 = ResultOf<typeof FRAGMENT_157>;
type FragmentSelf157 = NonNullable<FragmentResult157>;

export type FragmentToken157 =
  | FragmentSelf157["__typename"]
  | FragmentSelf157["typenameHint"] | FragmentToken155 | FragmentToken156;
