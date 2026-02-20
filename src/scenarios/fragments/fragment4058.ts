import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4056 } from "./fragment4056";
import type { FragmentToken4057 } from "./fragment4057";

export const FRAGMENT_4058 = gql(`
  fragment Fragment4058 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult4058 = ResultOf<typeof FRAGMENT_4058>;
type FragmentSelf4058 = NonNullable<FragmentResult4058>;

export type FragmentToken4058 =
  | FragmentSelf4058["__typename"]
  | FragmentSelf4058["typenameHint"] | FragmentToken4056 | FragmentToken4057;
