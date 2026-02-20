import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken644 } from "./fragment644";
import type { FragmentToken645 } from "./fragment645";

export const FRAGMENT_646 = gql(`
  fragment Fragment646 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult646 = ResultOf<typeof FRAGMENT_646>;
type FragmentSelf646 = NonNullable<FragmentResult646>;

export type FragmentToken646 =
  | FragmentSelf646["__typename"]
  | FragmentSelf646["typenameHint"] | FragmentToken644 | FragmentToken645;
