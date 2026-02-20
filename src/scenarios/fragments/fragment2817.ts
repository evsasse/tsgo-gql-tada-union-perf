import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2815 } from "./fragment2815";
import type { FragmentToken2816 } from "./fragment2816";

export const FRAGMENT_2817 = gql(`
  fragment Fragment2817 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult2817 = ResultOf<typeof FRAGMENT_2817>;
type FragmentSelf2817 = NonNullable<FragmentResult2817>;

export type FragmentToken2817 =
  | FragmentSelf2817["__typename"]
  | FragmentSelf2817["typenameHint"] | FragmentToken2815 | FragmentToken2816;
