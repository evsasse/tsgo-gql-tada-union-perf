import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken658 } from "./fragment658";
import type { FragmentToken659 } from "./fragment659";

export const FRAGMENT_660 = gql(`
  fragment Fragment660 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult660 = ResultOf<typeof FRAGMENT_660>;
type FragmentSelf660 = NonNullable<FragmentResult660>;

export type FragmentToken660 =
  | FragmentSelf660["__typename"]
  | FragmentSelf660["typenameHint"] | FragmentToken658 | FragmentToken659;
