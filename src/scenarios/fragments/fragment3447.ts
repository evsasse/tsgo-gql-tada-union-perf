import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3445 } from "./fragment3445";
import type { FragmentToken3446 } from "./fragment3446";

export const FRAGMENT_3447 = gql(`
  fragment Fragment3447 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult3447 = ResultOf<typeof FRAGMENT_3447>;
type FragmentSelf3447 = NonNullable<FragmentResult3447>;

export type FragmentToken3447 =
  | FragmentSelf3447["__typename"]
  | FragmentSelf3447["typenameHint"] | FragmentToken3445 | FragmentToken3446;
