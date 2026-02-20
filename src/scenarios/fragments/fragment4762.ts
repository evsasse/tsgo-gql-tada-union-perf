import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4760 } from "./fragment4760";
import type { FragmentToken4761 } from "./fragment4761";

export const FRAGMENT_4762 = gql(`
  fragment Fragment4762 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult4762 = ResultOf<typeof FRAGMENT_4762>;
type FragmentSelf4762 = NonNullable<FragmentResult4762>;

export type FragmentToken4762 =
  | FragmentSelf4762["__typename"]
  | FragmentSelf4762["typenameHint"] | FragmentToken4760 | FragmentToken4761;
