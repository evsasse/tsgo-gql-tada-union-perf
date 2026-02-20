import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1700 } from "./fragment1700";
import type { FragmentToken1701 } from "./fragment1701";

export const FRAGMENT_1702 = gql(`
  fragment Fragment1702 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult1702 = ResultOf<typeof FRAGMENT_1702>;
type FragmentSelf1702 = NonNullable<FragmentResult1702>;

export type FragmentToken1702 =
  | FragmentSelf1702["__typename"]
  | FragmentSelf1702["typenameHint"] | FragmentToken1700 | FragmentToken1701;
