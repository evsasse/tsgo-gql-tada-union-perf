import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken849 } from "./fragment849";
import type { FragmentToken850 } from "./fragment850";

export const FRAGMENT_851 = gql(`
  fragment Fragment851 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult851 = ResultOf<typeof FRAGMENT_851>;
type FragmentSelf851 = NonNullable<FragmentResult851>;

export type FragmentToken851 =
  | FragmentSelf851["__typename"]
  | FragmentSelf851["typenameHint"] | FragmentToken849 | FragmentToken850;
