import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4851 } from "./fragment4851";
import type { FragmentToken4852 } from "./fragment4852";

export const FRAGMENT_4853 = gql(`
  fragment Fragment4853 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult4853 = ResultOf<typeof FRAGMENT_4853>;
type FragmentSelf4853 = NonNullable<FragmentResult4853>;

export type FragmentToken4853 =
  | FragmentSelf4853["__typename"]
  | FragmentSelf4853["typenameHint"] | FragmentToken4851 | FragmentToken4852;
