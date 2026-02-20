import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3443 } from "./fragment3443";
import type { FragmentToken3444 } from "./fragment3444";

export const FRAGMENT_3445 = gql(`
  fragment Fragment3445 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult3445 = ResultOf<typeof FRAGMENT_3445>;
type FragmentSelf3445 = NonNullable<FragmentResult3445>;

export type FragmentToken3445 =
  | FragmentSelf3445["__typename"]
  | FragmentSelf3445["typenameHint"] | FragmentToken3443 | FragmentToken3444;
