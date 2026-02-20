import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4794 } from "./fragment4794";
import type { FragmentToken4795 } from "./fragment4795";

export const FRAGMENT_4796 = gql(`
  fragment Fragment4796 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult4796 = ResultOf<typeof FRAGMENT_4796>;
type FragmentSelf4796 = NonNullable<FragmentResult4796>;

export type FragmentToken4796 =
  | FragmentSelf4796["__typename"]
  | FragmentSelf4796["typenameHint"] | FragmentToken4794 | FragmentToken4795;
