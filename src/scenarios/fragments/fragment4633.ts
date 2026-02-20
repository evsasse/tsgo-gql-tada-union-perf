import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4631 } from "./fragment4631";
import type { FragmentToken4632 } from "./fragment4632";

export const FRAGMENT_4633 = gql(`
  fragment Fragment4633 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult4633 = ResultOf<typeof FRAGMENT_4633>;
type FragmentSelf4633 = NonNullable<FragmentResult4633>;

export type FragmentToken4633 =
  | FragmentSelf4633["__typename"]
  | FragmentSelf4633["typenameHint"] | FragmentToken4631 | FragmentToken4632;
