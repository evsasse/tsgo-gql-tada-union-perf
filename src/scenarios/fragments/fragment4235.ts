import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4233 } from "./fragment4233";
import type { FragmentToken4234 } from "./fragment4234";

export const FRAGMENT_4235 = gql(`
  fragment Fragment4235 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult4235 = ResultOf<typeof FRAGMENT_4235>;
type FragmentSelf4235 = NonNullable<FragmentResult4235>;

export type FragmentToken4235 =
  | FragmentSelf4235["__typename"]
  | FragmentSelf4235["typenameHint"] | FragmentToken4233 | FragmentToken4234;
