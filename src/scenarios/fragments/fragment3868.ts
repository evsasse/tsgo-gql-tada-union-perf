import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3866 } from "./fragment3866";
import type { FragmentToken3867 } from "./fragment3867";

export const FRAGMENT_3868 = gql(`
  fragment Fragment3868 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult3868 = ResultOf<typeof FRAGMENT_3868>;
type FragmentSelf3868 = NonNullable<FragmentResult3868>;

export type FragmentToken3868 =
  | FragmentSelf3868["__typename"]
  | FragmentSelf3868["typenameHint"] | FragmentToken3866 | FragmentToken3867;
