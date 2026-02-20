import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1703 } from "./fragment1703";
import type { FragmentToken1704 } from "./fragment1704";

export const FRAGMENT_1705 = gql(`
  fragment Fragment1705 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult1705 = ResultOf<typeof FRAGMENT_1705>;
type FragmentSelf1705 = NonNullable<FragmentResult1705>;

export type FragmentToken1705 =
  | FragmentSelf1705["__typename"]
  | FragmentSelf1705["typenameHint"] | FragmentToken1703 | FragmentToken1704;
