import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1664 } from "./fragment1664";
import type { FragmentToken1665 } from "./fragment1665";

export const FRAGMENT_1666 = gql(`
  fragment Fragment1666 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult1666 = ResultOf<typeof FRAGMENT_1666>;
type FragmentSelf1666 = NonNullable<FragmentResult1666>;

export type FragmentToken1666 =
  | FragmentSelf1666["__typename"]
  | FragmentSelf1666["typenameHint"] | FragmentToken1664 | FragmentToken1665;
