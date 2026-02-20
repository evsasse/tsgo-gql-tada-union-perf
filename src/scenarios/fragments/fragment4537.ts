import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4535 } from "./fragment4535";
import type { FragmentToken4536 } from "./fragment4536";

export const FRAGMENT_4537 = gql(`
  fragment Fragment4537 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult4537 = ResultOf<typeof FRAGMENT_4537>;
type FragmentSelf4537 = NonNullable<FragmentResult4537>;

export type FragmentToken4537 =
  | FragmentSelf4537["__typename"]
  | FragmentSelf4537["typenameHint"] | FragmentToken4535 | FragmentToken4536;
