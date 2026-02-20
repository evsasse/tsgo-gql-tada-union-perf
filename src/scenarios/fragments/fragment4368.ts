import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4366 } from "./fragment4366";
import type { FragmentToken4367 } from "./fragment4367";

export const FRAGMENT_4368 = gql(`
  fragment Fragment4368 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult4368 = ResultOf<typeof FRAGMENT_4368>;
type FragmentSelf4368 = NonNullable<FragmentResult4368>;

export type FragmentToken4368 =
  | FragmentSelf4368["__typename"]
  | FragmentSelf4368["typenameHint"] | FragmentToken4366 | FragmentToken4367;
