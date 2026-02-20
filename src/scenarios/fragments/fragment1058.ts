import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1056 } from "./fragment1056";
import type { FragmentToken1057 } from "./fragment1057";

export const FRAGMENT_1058 = gql(`
  fragment Fragment1058 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult1058 = ResultOf<typeof FRAGMENT_1058>;
type FragmentSelf1058 = NonNullable<FragmentResult1058>;

export type FragmentToken1058 =
  | FragmentSelf1058["__typename"]
  | FragmentSelf1058["typenameHint"] | FragmentToken1056 | FragmentToken1057;
