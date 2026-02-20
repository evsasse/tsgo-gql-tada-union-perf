import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4055 } from "./fragment4055";
import type { FragmentToken4056 } from "./fragment4056";

export const FRAGMENT_4057 = gql(`
  fragment Fragment4057 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult4057 = ResultOf<typeof FRAGMENT_4057>;
type FragmentSelf4057 = NonNullable<FragmentResult4057>;

export type FragmentToken4057 =
  | FragmentSelf4057["__typename"]
  | FragmentSelf4057["typenameHint"] | FragmentToken4055 | FragmentToken4056;
