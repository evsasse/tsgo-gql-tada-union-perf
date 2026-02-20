import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3739 } from "./fragment3739";
import type { FragmentToken3740 } from "./fragment3740";

export const FRAGMENT_3741 = gql(`
  fragment Fragment3741 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult3741 = ResultOf<typeof FRAGMENT_3741>;
type FragmentSelf3741 = NonNullable<FragmentResult3741>;

export type FragmentToken3741 =
  | FragmentSelf3741["__typename"]
  | FragmentSelf3741["typenameHint"] | FragmentToken3739 | FragmentToken3740;
