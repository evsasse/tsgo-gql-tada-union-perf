import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3760 } from "./fragment3760";
import type { FragmentToken3761 } from "./fragment3761";

export const FRAGMENT_3762 = gql(`
  fragment Fragment3762 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult3762 = ResultOf<typeof FRAGMENT_3762>;
type FragmentSelf3762 = NonNullable<FragmentResult3762>;

export type FragmentToken3762 =
  | FragmentSelf3762["__typename"]
  | FragmentSelf3762["typenameHint"] | FragmentToken3760 | FragmentToken3761;
