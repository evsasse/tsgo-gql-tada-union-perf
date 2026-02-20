import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4485 } from "./fragment4485";
import type { FragmentToken4486 } from "./fragment4486";

export const FRAGMENT_4487 = gql(`
  fragment Fragment4487 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult4487 = ResultOf<typeof FRAGMENT_4487>;
type FragmentSelf4487 = NonNullable<FragmentResult4487>;

export type FragmentToken4487 =
  | FragmentSelf4487["__typename"]
  | FragmentSelf4487["typenameHint"] | FragmentToken4485 | FragmentToken4486;
