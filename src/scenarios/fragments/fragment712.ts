import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken710 } from "./fragment710";
import type { FragmentToken711 } from "./fragment711";

export const FRAGMENT_712 = gql(`
  fragment Fragment712 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult712 = ResultOf<typeof FRAGMENT_712>;
type FragmentSelf712 = NonNullable<FragmentResult712>;

export type FragmentToken712 =
  | FragmentSelf712["__typename"]
  | FragmentSelf712["typenameHint"] | FragmentToken710 | FragmentToken711;
