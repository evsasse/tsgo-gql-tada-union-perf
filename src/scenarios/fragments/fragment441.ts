import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken439 } from "./fragment439";
import type { FragmentToken440 } from "./fragment440";

export const FRAGMENT_441 = gql(`
  fragment Fragment441 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult441 = ResultOf<typeof FRAGMENT_441>;
type FragmentSelf441 = NonNullable<FragmentResult441>;

export type FragmentToken441 =
  | FragmentSelf441["__typename"]
  | FragmentSelf441["typenameHint"] | FragmentToken439 | FragmentToken440;
