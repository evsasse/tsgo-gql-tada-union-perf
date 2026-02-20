import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1057 } from "./fragment1057";
import type { FragmentToken1058 } from "./fragment1058";

export const FRAGMENT_1059 = gql(`
  fragment Fragment1059 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult1059 = ResultOf<typeof FRAGMENT_1059>;
type FragmentSelf1059 = NonNullable<FragmentResult1059>;

export type FragmentToken1059 =
  | FragmentSelf1059["__typename"]
  | FragmentSelf1059["typenameHint"] | FragmentToken1057 | FragmentToken1058;
