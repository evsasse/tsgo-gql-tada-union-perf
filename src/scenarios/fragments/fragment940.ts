import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken938 } from "./fragment938";
import type { FragmentToken939 } from "./fragment939";

export const FRAGMENT_940 = gql(`
  fragment Fragment940 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult940 = ResultOf<typeof FRAGMENT_940>;
type FragmentSelf940 = NonNullable<FragmentResult940>;

export type FragmentToken940 =
  | FragmentSelf940["__typename"]
  | FragmentSelf940["typenameHint"] | FragmentToken938 | FragmentToken939;
