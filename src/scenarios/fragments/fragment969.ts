import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken967 } from "./fragment967";
import type { FragmentToken968 } from "./fragment968";

export const FRAGMENT_969 = gql(`
  fragment Fragment969 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult969 = ResultOf<typeof FRAGMENT_969>;
type FragmentSelf969 = NonNullable<FragmentResult969>;

export type FragmentToken969 =
  | FragmentSelf969["__typename"]
  | FragmentSelf969["typenameHint"] | FragmentToken967 | FragmentToken968;
