import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4577 } from "./fragment4577";
import type { FragmentToken4578 } from "./fragment4578";

export const FRAGMENT_4579 = gql(`
  fragment Fragment4579 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult4579 = ResultOf<typeof FRAGMENT_4579>;
type FragmentSelf4579 = NonNullable<FragmentResult4579>;

export type FragmentToken4579 =
  | FragmentSelf4579["__typename"]
  | FragmentSelf4579["typenameHint"] | FragmentToken4577 | FragmentToken4578;
