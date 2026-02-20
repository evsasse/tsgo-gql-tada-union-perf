import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken625 } from "./fragment625";
import type { FragmentToken626 } from "./fragment626";

export const FRAGMENT_627 = gql(`
  fragment Fragment627 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult627 = ResultOf<typeof FRAGMENT_627>;
type FragmentSelf627 = NonNullable<FragmentResult627>;

export type FragmentToken627 =
  | FragmentSelf627["__typename"]
  | FragmentSelf627["typenameHint"] | FragmentToken625 | FragmentToken626;
