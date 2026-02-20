import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3490 } from "./fragment3490";
import type { FragmentToken3491 } from "./fragment3491";

export const FRAGMENT_3492 = gql(`
  fragment Fragment3492 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult3492 = ResultOf<typeof FRAGMENT_3492>;
type FragmentSelf3492 = NonNullable<FragmentResult3492>;

export type FragmentToken3492 =
  | FragmentSelf3492["__typename"]
  | FragmentSelf3492["typenameHint"] | FragmentToken3490 | FragmentToken3491;
