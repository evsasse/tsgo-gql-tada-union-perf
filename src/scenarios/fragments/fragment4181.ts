import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4179 } from "./fragment4179";
import type { FragmentToken4180 } from "./fragment4180";

export const FRAGMENT_4181 = gql(`
  fragment Fragment4181 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult4181 = ResultOf<typeof FRAGMENT_4181>;
type FragmentSelf4181 = NonNullable<FragmentResult4181>;

export type FragmentToken4181 =
  | FragmentSelf4181["__typename"]
  | FragmentSelf4181["typenameHint"] | FragmentToken4179 | FragmentToken4180;
