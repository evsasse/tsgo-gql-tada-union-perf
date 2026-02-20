import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3761 } from "./fragment3761";
import type { FragmentToken3762 } from "./fragment3762";

export const FRAGMENT_3763 = gql(`
  fragment Fragment3763 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult3763 = ResultOf<typeof FRAGMENT_3763>;
type FragmentSelf3763 = NonNullable<FragmentResult3763>;

export type FragmentToken3763 =
  | FragmentSelf3763["__typename"]
  | FragmentSelf3763["typenameHint"] | FragmentToken3761 | FragmentToken3762;
