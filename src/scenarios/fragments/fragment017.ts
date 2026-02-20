import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken015 } from "./fragment015";
import type { FragmentToken016 } from "./fragment016";

export const FRAGMENT_017 = gql(`
  fragment Fragment017 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult017 = ResultOf<typeof FRAGMENT_017>;
type FragmentSelf017 = NonNullable<FragmentResult017>;

export type FragmentToken017 =
  | FragmentSelf017["__typename"]
  | FragmentSelf017["typenameHint"] | FragmentToken015 | FragmentToken016;
