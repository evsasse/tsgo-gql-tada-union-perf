import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4551 } from "./fragment4551";
import type { FragmentToken4552 } from "./fragment4552";

export const FRAGMENT_4553 = gql(`
  fragment Fragment4553 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult4553 = ResultOf<typeof FRAGMENT_4553>;
type FragmentSelf4553 = NonNullable<FragmentResult4553>;

export type FragmentToken4553 =
  | FragmentSelf4553["__typename"]
  | FragmentSelf4553["typenameHint"] | FragmentToken4551 | FragmentToken4552;
