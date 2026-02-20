import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4721 } from "./fragment4721";
import type { FragmentToken4722 } from "./fragment4722";

export const FRAGMENT_4723 = gql(`
  fragment Fragment4723 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult4723 = ResultOf<typeof FRAGMENT_4723>;
type FragmentSelf4723 = NonNullable<FragmentResult4723>;

export type FragmentToken4723 =
  | FragmentSelf4723["__typename"]
  | FragmentSelf4723["typenameHint"] | FragmentToken4721 | FragmentToken4722;
