import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken663 } from "./fragment663";
import type { FragmentToken664 } from "./fragment664";

export const FRAGMENT_665 = gql(`
  fragment Fragment665 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult665 = ResultOf<typeof FRAGMENT_665>;
type FragmentSelf665 = NonNullable<FragmentResult665>;

export type FragmentToken665 =
  | FragmentSelf665["__typename"]
  | FragmentSelf665["typenameHint"] | FragmentToken663 | FragmentToken664;
