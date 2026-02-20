import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4155 } from "./fragment4155";
import type { FragmentToken4156 } from "./fragment4156";

export const FRAGMENT_4157 = gql(`
  fragment Fragment4157 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult4157 = ResultOf<typeof FRAGMENT_4157>;
type FragmentSelf4157 = NonNullable<FragmentResult4157>;

export type FragmentToken4157 =
  | FragmentSelf4157["__typename"]
  | FragmentSelf4157["typenameHint"] | FragmentToken4155 | FragmentToken4156;
