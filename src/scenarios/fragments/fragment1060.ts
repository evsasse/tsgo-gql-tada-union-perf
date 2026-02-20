import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1058 } from "./fragment1058";
import type { FragmentToken1059 } from "./fragment1059";

export const FRAGMENT_1060 = gql(`
  fragment Fragment1060 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult1060 = ResultOf<typeof FRAGMENT_1060>;
type FragmentSelf1060 = NonNullable<FragmentResult1060>;

export type FragmentToken1060 =
  | FragmentSelf1060["__typename"]
  | FragmentSelf1060["typenameHint"] | FragmentToken1058 | FragmentToken1059;
