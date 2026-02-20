import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2999 } from "./fragment2999";
import type { FragmentToken3000 } from "./fragment3000";

export const FRAGMENT_3001 = gql(`
  fragment Fragment3001 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult3001 = ResultOf<typeof FRAGMENT_3001>;
type FragmentSelf3001 = NonNullable<FragmentResult3001>;

export type FragmentToken3001 =
  | FragmentSelf3001["__typename"]
  | FragmentSelf3001["typenameHint"] | FragmentToken2999 | FragmentToken3000;
