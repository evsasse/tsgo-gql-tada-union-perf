import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1054 } from "./fragment1054";
import type { FragmentToken1055 } from "./fragment1055";

export const FRAGMENT_1056 = gql(`
  fragment Fragment1056 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult1056 = ResultOf<typeof FRAGMENT_1056>;
type FragmentSelf1056 = NonNullable<FragmentResult1056>;

export type FragmentToken1056 =
  | FragmentSelf1056["__typename"]
  | FragmentSelf1056["typenameHint"] | FragmentToken1054 | FragmentToken1055;
