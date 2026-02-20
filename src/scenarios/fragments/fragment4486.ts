import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4484 } from "./fragment4484";
import type { FragmentToken4485 } from "./fragment4485";

export const FRAGMENT_4486 = gql(`
  fragment Fragment4486 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult4486 = ResultOf<typeof FRAGMENT_4486>;
type FragmentSelf4486 = NonNullable<FragmentResult4486>;

export type FragmentToken4486 =
  | FragmentSelf4486["__typename"]
  | FragmentSelf4486["typenameHint"] | FragmentToken4484 | FragmentToken4485;
