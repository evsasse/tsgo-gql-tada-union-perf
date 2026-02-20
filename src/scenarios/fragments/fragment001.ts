import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";


export const FRAGMENT_001 = gql(`
  fragment Fragment001 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult001 = ResultOf<typeof FRAGMENT_001>;
type FragmentSelf001 = NonNullable<FragmentResult001>;

export type FragmentToken001 =
  | FragmentSelf001["__typename"]
  | FragmentSelf001["typenameHint"];
