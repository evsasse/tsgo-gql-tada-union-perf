import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3877 } from "./fragment3877";
import type { FragmentToken3878 } from "./fragment3878";

export const FRAGMENT_3879 = gql(`
  fragment Fragment3879 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult3879 = ResultOf<typeof FRAGMENT_3879>;
type FragmentSelf3879 = NonNullable<FragmentResult3879>;

export type FragmentToken3879 =
  | FragmentSelf3879["__typename"]
  | FragmentSelf3879["typenameHint"] | FragmentToken3877 | FragmentToken3878;
