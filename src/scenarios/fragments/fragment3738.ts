import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3736 } from "./fragment3736";
import type { FragmentToken3737 } from "./fragment3737";

export const FRAGMENT_3738 = gql(`
  fragment Fragment3738 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult3738 = ResultOf<typeof FRAGMENT_3738>;
type FragmentSelf3738 = NonNullable<FragmentResult3738>;

export type FragmentToken3738 =
  | FragmentSelf3738["__typename"]
  | FragmentSelf3738["typenameHint"] | FragmentToken3736 | FragmentToken3737;
