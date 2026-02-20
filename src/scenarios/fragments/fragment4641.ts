import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4639 } from "./fragment4639";
import type { FragmentToken4640 } from "./fragment4640";

export const FRAGMENT_4641 = gql(`
  fragment Fragment4641 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult4641 = ResultOf<typeof FRAGMENT_4641>;
type FragmentSelf4641 = NonNullable<FragmentResult4641>;

export type FragmentToken4641 =
  | FragmentSelf4641["__typename"]
  | FragmentSelf4641["typenameHint"] | FragmentToken4639 | FragmentToken4640;
