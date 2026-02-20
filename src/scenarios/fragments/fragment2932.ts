import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2930 } from "./fragment2930";
import type { FragmentToken2931 } from "./fragment2931";

export const FRAGMENT_2932 = gql(`
  fragment Fragment2932 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult2932 = ResultOf<typeof FRAGMENT_2932>;
type FragmentSelf2932 = NonNullable<FragmentResult2932>;

export type FragmentToken2932 =
  | FragmentSelf2932["__typename"]
  | FragmentSelf2932["typenameHint"] | FragmentToken2930 | FragmentToken2931;
