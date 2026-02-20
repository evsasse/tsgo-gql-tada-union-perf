import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4670 } from "./fragment4670";
import type { FragmentToken4671 } from "./fragment4671";

export const FRAGMENT_4672 = gql(`
  fragment Fragment4672 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult4672 = ResultOf<typeof FRAGMENT_4672>;
type FragmentSelf4672 = NonNullable<FragmentResult4672>;

export type FragmentToken4672 =
  | FragmentSelf4672["__typename"]
  | FragmentSelf4672["typenameHint"] | FragmentToken4670 | FragmentToken4671;
