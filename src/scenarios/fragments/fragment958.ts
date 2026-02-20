import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken956 } from "./fragment956";
import type { FragmentToken957 } from "./fragment957";

export const FRAGMENT_958 = gql(`
  fragment Fragment958 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult958 = ResultOf<typeof FRAGMENT_958>;
type FragmentSelf958 = NonNullable<FragmentResult958>;

export type FragmentToken958 =
  | FragmentSelf958["__typename"]
  | FragmentSelf958["typenameHint"] | FragmentToken956 | FragmentToken957;
