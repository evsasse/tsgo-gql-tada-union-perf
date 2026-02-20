import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4504 } from "./fragment4504";
import type { FragmentToken4505 } from "./fragment4505";

export const FRAGMENT_4506 = gql(`
  fragment Fragment4506 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult4506 = ResultOf<typeof FRAGMENT_4506>;
type FragmentSelf4506 = NonNullable<FragmentResult4506>;

export type FragmentToken4506 =
  | FragmentSelf4506["__typename"]
  | FragmentSelf4506["typenameHint"] | FragmentToken4504 | FragmentToken4505;
