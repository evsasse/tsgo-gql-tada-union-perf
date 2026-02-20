import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4016 } from "./fragment4016";
import type { FragmentToken4017 } from "./fragment4017";

export const FRAGMENT_4018 = gql(`
  fragment Fragment4018 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult4018 = ResultOf<typeof FRAGMENT_4018>;
type FragmentSelf4018 = NonNullable<FragmentResult4018>;

export type FragmentToken4018 =
  | FragmentSelf4018["__typename"]
  | FragmentSelf4018["typenameHint"] | FragmentToken4016 | FragmentToken4017;
