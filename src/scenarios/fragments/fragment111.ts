import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken109 } from "./fragment109";
import type { FragmentToken110 } from "./fragment110";

export const FRAGMENT_111 = gql(`
  fragment Fragment111 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult111 = ResultOf<typeof FRAGMENT_111>;
type FragmentSelf111 = NonNullable<FragmentResult111>;

export type FragmentToken111 =
  | FragmentSelf111["__typename"]
  | FragmentSelf111["typenameHint"] | FragmentToken109 | FragmentToken110;
