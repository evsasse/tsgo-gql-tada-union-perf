import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4849 } from "./fragment4849";
import type { FragmentToken4850 } from "./fragment4850";

export const FRAGMENT_4851 = gql(`
  fragment Fragment4851 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult4851 = ResultOf<typeof FRAGMENT_4851>;
type FragmentSelf4851 = NonNullable<FragmentResult4851>;

export type FragmentToken4851 =
  | FragmentSelf4851["__typename"]
  | FragmentSelf4851["typenameHint"] | FragmentToken4849 | FragmentToken4850;
